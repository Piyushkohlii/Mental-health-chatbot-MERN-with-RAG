import { Journal } from "../models/journal.model.js";

export const createJournal = async (req,res)=>{
    try{

        const journal = await Journal.create({
            user: req.user._id,
            title: req.body.title,
            content: req.body.content,
            mood: req.body.mood
        });

        res.json(journal);

    }catch(error){
        res.status(500).json({message:error.message})
    }
};


export const getJournals = async (req,res)=>{
    try{

        const journals = await Journal
        .find({user:req.user._id})
        .sort({createdAt:-1});

        res.json(journals);

    }catch(error){
        res.status(500).json({message:error.message})
    }
};

export const getSingleJournal = async (req, res) => {

  try {

    const journal = await Journal.findById(req.params.id);

    if (!journal) {
      return res.status(404).json({
        message: "Journal not found"
      });
    }

    res.json(journal);

  } catch (error) {

    res.status(500).json({
      message: error.message
    });

  }

};


export const deleteJournal = async (req,res)=>{
    try{

        const journal = await Journal.findById(req.params.id);

        if(!journal) return res.status(404).json({message:"Not found"});

        if(journal.user.toString() !== req.user._id.toString())
        return res.status(403).json({message:"Unauthorized"});

        await journal.deleteOne();

        res.json({message:"Journal deleted"});

    }catch(error){
        res.status(500).json({message:error.message})
    }
};