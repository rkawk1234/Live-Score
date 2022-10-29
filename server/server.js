const express = require('express')
const app = express()
const cors = require('cors')
const mongoose = require('mongoose')
const User = require('./models/user.model')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')


app.use(cors())
app.use(express.json())


app.post('/api/register', async (req, res) => {
	console.log(req.body)
	try {
		const newPassword = await bcrypt.hash(req.body.password, 10)
		await User.create({
			name: req.body.name,
			email: req.body.email,
			password: newPassword,
            points: req.body.points,
            visits: req.body.visits,

		})
        
		res.json({ status: 'ok' })
	} catch (err) {
		res.json({ status: 'error', error: 'Duplicate email' })
	}
})

app.post('/api/login', async (req, res) => {



	const user = await User.findOne({
		email: req.body.email,
	})

    await User.findOneAndUpdate(
        {email: req.body.email},
        {$inc :{visits : 1}},
        // {$inc:{points: 1000}},
        
    )

    // const isTrue = await User.findOne({
    //     visits: 1
    // })
    // if (isTrue){
    //     await User.findOneAndUpdate(
    //         {email: req.body.email},
    //         {$inc :{points : 1000}}
            
    //     )

    // }

    



	if (!user) {
		return { status: 'error', error: 'Invalid Email' }
	}

	const isPasswordValid = await bcrypt.compare(
		req.body.password,
		user.password
	)

	if (isPasswordValid) {
		const token = jwt.sign(
			{
				name: user.name,
				email: user.email,
			},
			'secret123'
		)

		return res.json({ status: 'ok', user: token })
	} else {
		return res.json({ status: 'error', user: false })
	}
})

app.listen(1337, () => {
    console.log('Server started on 1337')
})


