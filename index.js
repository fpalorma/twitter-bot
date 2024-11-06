import 'dotenv/config';
import { CronJob } from 'cron';
import { twitterClient } from './twitterClient.js';
import express from "express"

const app = express();
const port = process.env.PORT || 4000;

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

const tweet = async () => {
  try {
    const date = new Date()
    await twitterClient.v2.tweet(`Hello world! ${date.toLocaleString()}`);
  } catch (e) {
    console.log(e);
  }
};

const cronTweet = new CronJob("0 */2 * * *", tweet);

// Iniciar el cron job
cronTweet.start();