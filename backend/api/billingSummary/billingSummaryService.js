const _=require('lodash')
const BillingCycle = require('../billingCycle/billingCycle')

//criando uma função middleware
function getSummary(req, res){
    //criando pipe line de agregação
    BillingCycle.aggregate({
        $project: {credit: {$sum: "$credits.value"}, debt: {$sum: "$debts.value"}}
    },{
        $group: {_id: null, credit: {$sum: "$credit"}, deb: {$sum: "$debt"}}

    },{
        $project: {_id:0, credit:1, debt:1}
    }, function(error, result){
        if(error){
            res.status(500).json({errors:[error]})
        }else{
            res.json(_.defaults(result[0], {credit:0, debt:0}))
        }
    
    })
}

module.exports = {getSummary}