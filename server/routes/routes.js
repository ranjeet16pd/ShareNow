import express, { Router } from 'express'
const router=express.Router();
import { uploadImage } from './image-controller.js';
import upload from '../utils/upload.js';
import { downloadImage } from './image-controller.js';


router.post('/upload',upload.single('file'),uploadImage);
router.get('/file/:fileId',downloadImage)

export default router;