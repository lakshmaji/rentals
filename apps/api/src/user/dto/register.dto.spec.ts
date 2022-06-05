import { RegisterDto } from './register.dto.ts';

describe('RegisterDto', () => {
  it('should be defined', () => {
    expect(new RegisterDto()).toBeDefined();
  });
});
