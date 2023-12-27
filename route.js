import { Router } from 'express';
const router = Router();
import { Student, Payment, Notice ,Teacher ,Download } from './schema.js'; 

// Create a new student
router.post('/students', async (req, res) => {
  try {
    const student = new Student();
    student.class=req.body.class;
    student.division=req.body.division;
    student.studentName=req.body.studentName;
    student.fathersName=req.body.fathersName;
    student.mothersName=req.body.mothersName;
    student.dateOfBirth=req.body.dateOfBirth;
    student.gender=req.body.gender;
    student.address=req.body.address;
    student.phoneNumber=req.body.phoneNumber; 
    student.whatsappNumber=req.body.whatsappNumber;
    student.schoolName=req.body.schoolName;

    student.save();
    res.status(201).json(student);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Get all students
router.get('/students', async (req, res) => {
  try {
    const students = await Student.find(req.query);
    res.status(200).json(students);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});


// Create a new teacher
router.post('/teacher', async (req, res) => {
  try {
    const teacher = new Teacher();
    teacher.name=req.body.name;
    teacher.address=req.body.address;
    teacher.phoneNumber=req.body.phoneNumber; 
    teacher.whatsappNumber=req.body.whatsappNumber; 
    teacher.qualification=req.body.qualification; 
    teacher.teacherOf=req.body.teacherOf; 
    teacher.experience=req.body.experience; 
    
    teacher.save();
    res.status(201).json(teacher);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});
// Get all students
router.get('/teacher', async (req, res) => {
  try {
    const teacher = await Teacher.find(req.query);
    res.status(200).json(teacher);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});


// Create a new payment
router.post('/payments', async (req, res) => {
  try {
    const payment = new Payment();
    payment.studentId=req.body.studentId;
    payment.month=req.body.month;
    payment.amount=req.body.amount;

    payment.save();
    res.status(201).json(payment);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Get all payments
router.get('/payments', async (req, res) => {
  try {
    const payments = await Payment.find(req.query);
    res.status(200).json(payments);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.post('/Notice', async (req,res)=>{
  try {
    const notice = new Notice();
    notice.title=req.body.title;
    notice.disc=req.body.disc;
    notice.url=req.body.url;
    notice.save();
    res.status(201).json(notice);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
})
router.get('/Notice',async(req,res)=>{
  try {
    const notice = await Notice.find(req.query);
    res.status(200).json(notice);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }  
})


//download
router.post('/download', async(req,res)=>{
  try{
    const download = new Download();
    download.title=req.body.title;
    download.url=req.body.url;
  download.save();
  res.status(201).json(download)
  }catch(error){
    res.status(400).json({error: error.message})
  }
})
router.get('/download',async(req,res)=>{
  try {
    const download = await Download.find(req.query);
    res.status(200).json(download);
  } catch (error) {
    res.status(500).json({error: error.message});
  }
})

export default router;
