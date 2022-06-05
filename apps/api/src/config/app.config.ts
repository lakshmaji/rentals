export interface AppConfig {
  port: number;
}

export default () => ({
  port: parseInt(process.env.PORT, 10) || 6002,
});
