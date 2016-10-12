var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/cs5610');

var FormSchema = mongoose.Schema({
    name: String,
    created: {type: Date, default: Date.now}
},{collection:'form'})

var Form = mongoose.model('Form', FormSchema);

Form.find({name:'name2'},(err,data)=>{
    console.log(err);
    console.log(data);
});

Form.findById('57fddac93b771f2a622b2bb0', (err, data)=>{
    console.log(err);
    console.log(data);
});
