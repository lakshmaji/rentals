import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  UseGuards,
  Logger,
  Req,
  Put,
  BadRequestException,
  ClassSerializerInterceptor,
  UseInterceptors,
} from '@nestjs/common';
import {
  ApiBadRequestResponse,
  ApiBearerAuth,
  ApiBody,
  ApiCreatedResponse,
  ApiHeader,
  ApiProperty,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import { Public } from 'src/public.decorator';
import UserContext from 'src/user/models/user.context';
import { ApartmentService } from './apartment.service';
import { CreateApartmentDto } from './dto/create-apartment.dto';

class ApartmentResp extends CreateApartmentDto {
  @ApiProperty()
  id: string;
}

@ApiHeader({
  name: 'Content-Type',
  description: 'application/json',
  allowEmptyValue: false,
})
@ApiResponse({ status: 403, description: 'Forbidden.' })
@Controller('apartment')
export class ApartmentController {
  constructor(private readonly apartmentService: ApartmentService) {}

  @ApiTags('apartment')
  @UseInterceptors(ClassSerializerInterceptor)
  @ApiBearerAuth()
  @ApiCreatedResponse({
    description: 'The apartment has been successfully created.',
    type: ApartmentResp,
  })
  @ApiBadRequestResponse({ status: 400, description: 'Input validation' })
  @Post()
  create(
    @Body() createApartmentDto: CreateApartmentDto,
    @Req() req: UserContext,
  ) {
    return this.apartmentService.create(createApartmentDto, req.user);
  }

  @Public()
  @ApiTags('apartment')
  @UseInterceptors(ClassSerializerInterceptor)
  @ApiResponse({
    status: 200,
    description: 'List of apartments.',
    type: ApartmentResp,
  })
  @ApiBody({
    type: [CreateApartmentDto],
  })
  @Get()
  findAll() {
    return this.apartmentService.findAll();
  }

  @ApiResponse({
    status: 200,
    description: 'My list of apartments.',
    type: ApartmentResp,
  })
  @ApiTags('apartment user')
  @ApiBearerAuth()
  @UseInterceptors(ClassSerializerInterceptor)
  @Get('private')
  myApartments(@Req() req: UserContext) {
    return this.apartmentService.findAll(+req.user.id);
  }

  @ApiTags('apartment')
  @UseInterceptors(ClassSerializerInterceptor)
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.apartmentService.findOne(+id);
  }

  @ApiTags('apartment user')
  @UseInterceptors(ClassSerializerInterceptor)
  @ApiBearerAuth()
  @Put(':id/interest')
  async sendInterest(@Param('id') id: string, @Req() req: UserContext) {
    const userId = Number(req.user.id);
    const apartmentId = +id;
    const apartment =
      await this.apartmentService.findApartmentWithInterestedUsers(apartmentId);

    const apartmentInterestedUser =
      await this.apartmentService.findAptUserRecord(apartmentId, userId);

    if (apartmentInterestedUser) {
      throw new BadRequestException(
        'You are already interested in this apartment',
      );
    }

    return this.apartmentService.createInterestForApartment(
      apartment,
      req.user,
    );
  }

  @ApiTags('apartment user')
  @UseInterceptors(ClassSerializerInterceptor)
  @ApiBearerAuth()
  @Get(':id/interest')
  getInterests(@Param('id') id: string) {
    return this.apartmentService.findOneWithInterests(+id);
  }

  @ApiTags('apartment user')
  @UseInterceptors(ClassSerializerInterceptor)
  @ApiBearerAuth()
  @Put(':id/match/:userId')
  async matchInterest(
    @Param('id') id: string,
    @Param('userId') userId: number,
    @Req() req: UserContext,
  ) {
    const apartmentId = +id;

    const apartment = await this.apartmentService.findOne(apartmentId);
    if (apartment.owner.id !== Number(req.user.id)) {
      throw new BadRequestException('You are not the owner of this apartment');
    }

    return this.apartmentService.matchInterestForApartment(
      apartment,
      Number(userId),
    );
  }
}
