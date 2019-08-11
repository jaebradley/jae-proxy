import winston from 'winston';

const level = process.env.LOG_LEVEL || 'debug';

const logger = winston.createLogger({
  transports: [
    new winston.transports.Console({
      level,
      timestamp() {
        return (new Date()).toISOString();
      },
    }),
  ],
});

logger.stream = {
  write(message) {
    logger.info(message);
  },
};

export default logger;
