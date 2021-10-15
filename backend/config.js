const defaultConfig = {
  HOSTNAME: 'localhost',
  NODE_ENV: 'development',
  PORT: 5000,
};

const { EXPRESS_APP_HOSTNAME, EXPRESS_APP_PORT, NODE_ENV } = process.env;

export const config = Object.freeze({
  HOSTNAME: EXPRESS_APP_HOSTNAME || defaultConfig.HOSTNAME,
  NODE_ENV: NODE_ENV || defaultConfig.NODE_ENV,
  PORT: EXPRESS_APP_PORT || defaultConfig.PORT,
});
