module.exports = function (context, req) {
    context.log('JavaScript HTTP trigger function processed a request.');

    // Using undefined because if the user sends a 0 as a parameter it would be considered false
    if (req.body && req.body.op1 !== undefined && req.body.op2 !== undefined) {
        let op1 = req.body.op1;
        let op2 = req.body.op2;
        let status = 200;
        let body;
        if (!isNaN(op1) && !isNaN(op2)) {
            if (op2 !== 0) {
                body = `Result: ${op1 / op2}`;
            } else {
                status = 409;
                body = "You can't divide by 0";
            }
        } else {
            status = 409;
            body = "The operands must be numbers";
        }
        context.res = {
            status: status,
            body: body
        };
    }
    else {
        context.res = {
            status: 400,
            body: "Please pass the operands in the request body"
        };
    }
    context.done();
};