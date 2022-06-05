export interface AppConfig {
  port: number;
  clientOrigins: string; // comma separated domains
}

export default () => ({
  port: parseInt(process.env.PORT, 10) || 6002,
  clientOrigins: process.env.CLIENT_ORIGINS,
});
