const mongoose = require('mongoose');
const purchaseSchema = mongoose.Schema({

    DueDate:{type: Date, require: true},
    DocNumber:{type: Number, require: true},
    Status:{type: String, require: true},
    Line:{type: String, require: true, 
        Amount:{
            type:Float32Array, require:true
        },
        DetailType:{
            type:String, require:true
        },
        ExpenseDetail:{
            type:Object, require:true, 
                Customer:{
                    type:Object, require:true, 
                        value:{
                            type:String, require:true
                        },
                        name:{
                            type:String, require:true
                        },
                        Ref:{
                            type:Object, require:true, 
                                value:{
                                    type:String, require:true
                                },
                                name:{
                                    type:String, require:true
                                }
                        }

                },
                Account:{
                    type:Object, require:true, 
                        value:{
                            type:String, require:true
                        },
                        name:{
                            type:String, require:true
                        }
                },
                LineStatus:{
                    type:String, require:true
                }
        },
        
    },

    Vendor:{type:Object, require:true, 
        value:{
            type:Float32Array,require:true
        },
        name:{
            type:String,require:true
        } 
    },
    TotalAmount:{type: Object, require: true, unique: true}
});
module.exports = mongoose.model('purchaseCollection', purchaseSchema);