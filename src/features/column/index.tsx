import React from "react";
import { ScrollView } from "react-native";
import Cell from '../cell';

const data = {
	"ACT Symbol": "A",
	"Company Name": "Agilent Technologies, Inc. Common Stock",
	"Security Name": "Agilent Technologies, Inc. Common Stock",
	"Exchange": "N",
	"CQS Symbol": "A",
	"ETF": "N",
	"Round Lot Size": 100,
	"Test Issue": "N",
	"NASDAQ Symbol": "A",
  };

const Column = () => {
	const columnElements = Object.values(data);

	return (
		<ScrollView horizontal style={{ display: 'flex', flexDirection: 'row' }}>
			{columnElements.map((element : any)=> <Cell element={element} />)}
		</ScrollView>
	)
}

export default Column;