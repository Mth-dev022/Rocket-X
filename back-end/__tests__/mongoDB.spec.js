const mongoose = require('mongoose');
const connectDB = require('../db/db'); 

describe('Database Connection', () => {
  afterEach(() => {
    jest.restoreAllMocks(); 
  });

  it('should connect to MongoDB successfully', async () => {
    jest.spyOn(mongoose, 'connect').mockImplementation(() => Promise.resolve());

    await connectDB();

    expect(mongoose.connect).toHaveBeenCalledWith(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
  });

  it('should fail to connect to MongoDB', async () => {
    const errorMessage = 'Error connecting to MongoDB';
    jest.spyOn(mongoose, 'connect').mockImplementation(() => Promise.reject(new Error(errorMessage)));

    const consoleSpy = jest.spyOn(console, 'error').mockImplementation(() => {});
    const processExitSpy = jest.spyOn(process, 'exit').mockImplementation(() => {});

    await connectDB();

    expect(console.error).toHaveBeenCalledWith('Error connecting to MongoDB:', errorMessage);
    expect(process.exit).toHaveBeenCalledWith(1);

    consoleSpy.mockRestore();
    processExitSpy.mockRestore();
  });
});
