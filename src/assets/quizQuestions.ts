type Question = {
    question:string,
    options:[answer:string,string,string]
}

export const QUIZ_QUESTIONS:Question[] = [
    {
    question: "What did Odin sacrifice to gain unparalleled wisdom, and where did he make this sacrifice ?",
        options: ["His eye at Mimir’s well","His hand at Fenrir’s binding","His spear at Yggdrasi"] 
    },
    {
        question: "Who is Grýla in Icelandic folklore ?", 
        options: ["Grýla is a giantess, known for kidnapping and eating naughty children.","Grýla s a legendary serpent said to live in Lagarfljót lake in eastern Iceland.", "Grýla is one of the Santa Clauses in Icelandic folklore."]
    },
    {
        question: "What is the role of a Valkyrie in Norse mythology ?",
        options: [ "Valkyrie is a mortal woman who has had magnificent powers bestowed on her by Odin.", "Valkyrie is known as the god of mischief and trickery.", "Valkyrie is the supreme leader of the Aesir gods and ruler of Asgard."]
    }
]
