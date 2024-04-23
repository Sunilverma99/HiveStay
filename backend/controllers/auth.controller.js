
//export function to sign up  of user
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import User from '../models/User.js'; 

 export const signup = async (req, res, next) => {
  try {
    const { firstName,lastName, email, password,rollNumber,roomNumber,branch,mess,mobileNumber,homeMobileNumber,address } = req.body;
    
    // Check if email ends with @iiitu.ac.in
    if (!email || !email.endsWith('@iiitu.ac.in')) {
      return res.status(400).json({ error: 'Invalid email format. Only @iiitu.ac.in emails are allowed.' });
    }

    if (!firstName || !password) {
      return res.status(400).json({ error: 'Username and password are required.' });
    }

    const hashPassword = await bcrypt.hashSync(password, 10);
    const hashedPassword = hashPassword.toString();
    
    
    const newUser = new User({ firstName,lastName, email, password: hashedPassword,rollNumber,roomNumber,branch,mess,mobileNumber,homeMobileNumber,address });
    try {
      await newUser.save();
      res.status(201).json("user created successfully");
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  } catch (error) {
    console.error('Error in signup:', error);
    next(error);
  }
};

  export const login = async (req, res, next) => {
  const { email, password } = req.body;
  console.log(email,password);
  if(email!=="warden@iiitu.ac.in"){
    try {
      if (!email || !email.endsWith('@iiitu.ac.in')) {
        return res.status(400).json({ error: 'Invalid email format. Only @iiitu.ac.in emails are allowed.' });
      }
  
      const validUser = await User.findOne({ email: email });
  
      if (!validUser) {
        return res.status(404).json({ error: 'User not found' });
      }
  
      const validPassword = bcrypt.compareSync(password, validUser.password);
  
      if (!validPassword) {
        return res.status(404).json({ error: 'Password is incorrect' });
      }
  
      const { password: pass, ...rest } = validUser._doc;
      const tokenData={
        id: validUser._id,
        firstName: validUser.firstName,
        lastName: validUser.lastName,
        email: validUser.email,
        rollNumber: validUser.rollNumber,
        roomNumber: validUser.roomNumber,
        branch: validUser.branch,
        mess: validUser.mess,
        mobileNumber: validUser.mobileNumber,
        homeMobileNumber: validUser.homeMobileNumber,
        address: validUser.address
      }
      const token = jwt.sign(tokenData, process.env.JWT_TOKEN);
  
      const options = {
        httpOnly: true,
        expires: new Date(Date.now() + 5 * 60 * 60 * 24 * 1000),
        secure: true,
        sameSite: 'none'
      };
  
      res.status(200).cookie('access_token', token, options).json({rest,token});
    } catch (error) {
      return next(error);
    }
  }else{
    try {
      if (!email || !email.endsWith('@iiitu.ac.in')) {
        return res.status(400).json({ error: 'Invalid email format. Only @iiitu.ac.in emails are allowed.' });
      }
  
      const validUser = await User.findOne({ email: email });
  
      if (!validUser) {
        return res.status(404).json({ error: 'User not found' });
      }
  
      const validPassword = bcrypt.compareSync(password, validUser.password);
  
      if (!validPassword) {
        return res.status(404).json({ error: 'Password is incorrect' });
      }
  
      const { password: pass, ...rest } = validUser._doc;
      const tokenData={
        id: validUser._id,
        firstName: validUser.firstName,
        lastName: validUser.lastName,
        email: validUser.email,
        mobileNumber: validUser.mobileNumber,
      }
      const token = jwt.sign(tokenData, process.env.JWT_TOKEN);
  
      const options = {
        httpOnly: true,
        expires: new Date(Date.now() + 5 * 60 * 60 * 24 * 1000),
        secure: true,
        sameSite: 'none'
      };
  
      res.status(200).cookie('access_token', token, options).json({rest,token});
    } catch (error) {
      return next(error);
    }
  }
};


//simple function to delete the cookie
export const logout=async(req,res,next)=>{

  try {
       res.clearCookie('access_token');
       res.status(200).json('User has been Sign out successfully');
      
  } catch (error) {
      next(error);
  }
}