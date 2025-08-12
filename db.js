const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    await mongoose.connect(
      'mongodb+srv://eusouleony:<Familiacraft@20>@cluster0.uc8y2p8.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0',
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    );
    console.log('✅ MongoDB Atlas conectado com sucesso!');
  } catch (err) {
    console.error('❌ Erro ao conectar no MongoDB Atlas:', err.message);
    process.exit(1);
  }
};

module.exports = connectDB;
