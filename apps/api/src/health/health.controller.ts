import { Controller, Get } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import {
  HealthCheckService,
  HttpHealthIndicator,
  HealthCheck,
  TypeOrmHealthIndicator,
} from '@nestjs/terminus';
import { Public } from 'src/public.decorator';

@ApiTags('Health Status')
@Controller('health')
export class HealthController {
  constructor(
    private readonly health: HealthCheckService,
    private readonly http: HttpHealthIndicator,
    private readonly db: TypeOrmHealthIndicator,
  ) {}

  @Public()
  @Get('api')
  @HealthCheck()
  api() {
    return this.health.check([
      () => this.http.pingCheck('Rentals API', 'http://localhost:6002'),
    ]);
  }

  @Public()
  @Get('database')
  @HealthCheck()
  database() {
    return this.health.check([() => this.db.pingCheck('database')]);
  }
}
