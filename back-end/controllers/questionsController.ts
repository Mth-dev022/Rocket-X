import Questions from '../models/questionSchema';
import Results from '../models/resultSchema';
import {questions, answers} from '../db/data'

const getQuestions = async (req: any, res: any) => {
  try {
    const q = await Questions.find();
    res.json(q);
  } catch (e: any) {
    res.status(500).json({ error: e.message });
  }
};

const insertQuestions = async (req: any, res: any) => {
  try {
    const data = await Questions.insertMany([
      { questions, answers }
    ]);
    res.json({ msg: "Data saved Successfully", data });
  } catch (e: any) {
    res.status(500).json({ error: e.message });
  }
};

const dropQuestions = async (req: any, res: any) => {
  try {
    await Questions.deleteMany();
    res.json({ msg: "Questions deleted" });
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
};

const getResult = async (req: any, res: any) => {
  try {
    const r = await Results.find();
    res.json(r);
  } catch (e: any) {
    res.status(500).json({ error: e.message });
  }
};

const storeResult = async (req: any, res: any) => {
  try {
    const { username, result, attempts, points, achieved } = req.body;

    if (!username || result === undefined) {
      throw new Error("Data not Provided!");
    }

    const data = await Results.create({ username, result, attempts, points, achieved });
    res.json({ msg: "Result saved successfully!", data });
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
};

const dropResult = async (req: any, res: any) => {
  try {
    await Results.deleteMany();
    res.json({ msg: "Result Deleted Successfully" });
  } catch (e: any) {
    res.status(500).json({ error: e.message });
  }
};

export {
  getQuestions,
  insertQuestions,
  dropQuestions,
  getResult,
  storeResult,
  dropResult
};
