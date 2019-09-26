const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate');

const UserSchema = new mongoose.Schema({
    nome: {
        type: String,
        required: true
      },
      email: {
        type: String,
        unique: true,
        required: true,
        lowercase: true
      },
      password: {
        type: String,
        required: true,
        select: false //para informação não ir no array de users
      },
        data_criacao: {
            type: timestamp,
            required: true,
            },
            data_alteracao: {
            type: timestamp,
            required: true
            }
      },
});

UserSchema.plugin(mongoosePaginate);

mongoose.model('User', UserSchema);