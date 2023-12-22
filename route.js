import { Router } from 'express';
const router = Router();
import { Student, Payment } from './schema.js'; 

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

// Create a new payment
router.post('/payments', async (req, res) => {
  try {
    const payment = new Payment();
    payment.studentId=req.body.studentId;
    payment.month=req.body.month;
    payment.save();
    res.status(201).json(payment);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Get all payments
router.get('/payments', async (req, res) => {
  try {
    const payments = await Payment.find();
    res.status(200).json(payments);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

export default router;
