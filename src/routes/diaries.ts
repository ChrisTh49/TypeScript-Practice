import express from "express";
import * as diaryServices from '../services/diaryServices';
import toNewDiaryEntry from "../utils/utils";

const router = express.Router();

router.get('/', (_req, res) => {
    res.json(diaryServices.getEntriesWithoutSensitiveInfo());
});

router.get('/:id', (req, res) => {
    const { id } = req.params;
    const diary = diaryServices.findEntryById(+id)

    return (diary != null) ? res.status(200).send(diary) : res.status(404).send("The id wasn't found");
});

router.post('/', (req, res) => {
    try {
        const newDiaryEntry = toNewDiaryEntry(req.body)

        const addedDiaryEntry = diaryServices.addDiary(newDiaryEntry);
    
        res.status(200).send(addedDiaryEntry);   
    } catch (e: any) {
        res.status(400).json({
            message: e.message
        })
    }
});

export default router;