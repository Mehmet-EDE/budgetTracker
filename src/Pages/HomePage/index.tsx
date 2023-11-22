import React from 'react'
import Card from '../../components/Card'
import expense from "../../mocks/expense.json"
function Home() {
    const expenseData = expense
    console.log(expenseData)
    return (
        <div className='flex justify-evenly w-full items-center  flex-wrap'>

            {
                expenseData.map((item) => (
                    <div key={item.id}>
                        <Card type={item.type} amount={item.amount} />
                    </div>
                ))
            }
        </div>
    )
}

export default Home