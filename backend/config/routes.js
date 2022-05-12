const express = require('express')

module.exports = function(server){
    //API Router
    const router = express.Router()
    server.use('/api', router)

    //Para teste
    // router.route('/teste').get(function(req, res, next){
    //     res.send('FUNCIONOU')
    // })

    //Rotas API
    const billingCycleService = require('../api/billingCycle/billingCycleService')
    billingCycleService.register(router, '/billingCycles')

    const billingSummaryService = require('../api/billingSummary/billingSummaryService')
    router.route('/billingSummary').get(billingSummaryService.getSummary)
}