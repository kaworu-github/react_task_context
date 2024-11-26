import Button from './components/Button/Button';
import { Fragment, useState } from 'react';
import { useCountContext } from './context/MyContextTaskOne';
//import { useNotification } from './context/MyContexTaskTwo';
import { useRole } from './context/MyContextTaskThree';
import "./App.css";

export default function App() {		
	
	// const initialUsers = [
	// 	{ id: 1, name: 'Иван Иванов', role: 'admin' },
	// 	{ id: 2, name: 'Мария Смирнова', role: 'user' },
	// 	{ id: 3, name: 'Сергей Кузнецов', role: 'user' },
	//   ];

	let {count, countPlus, countMinus} = useCountContext();

	let {
		users,
		onChangeRole
	} = useRole();

	/* let {
		notifications, 
		newNotification, 
		onChangeNewNotification, 
		onAddNewNotification, 
		onDelateNitification, 
		onReadNotification} = useNotification(); */

	return(
		<Fragment>
				<div className='ml-20 mt-10'>
					<h1>{count}</h1>
					<Button onTouch={countPlus}>plus</Button>
					<Button onTouch={countMinus}>minus</Button>
				</div>


				<div className='p-40'>
					{
						users.map(({id, name, role})=>
							<li
							key={id}
							onClick={()=>onChangeRole(id)}
							>
								{name} : user role {role}
							</li>
						)
					}
				</div>

				{/* <div>
					{notifications.map(({id, message, read})=>
						<li
							key={id}

						>
							{message}
						</li>
					)}
					<Button onTouch={()=>onAddNewNotification}>Добавить оповищение</Button>
				</div> */}
		</Fragment>
	);
};

// export default App;