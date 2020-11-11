import React from 'react'
import {  Card, CardItem, Text, Body} from 'native-base';
 const Answer = (props) => {
     if(props.data){
    return (
        <Card>
        <CardItem>
          <Body>
            <Text>
              {"Percentage:  "+props.data.percentage}
            </Text>
            <Text>
             {"Comment:  "+props.data.result}
            </Text>
          </Body>
        </CardItem>
      </Card>
    )
}else{
    return(
        <Text></Text>
    )
}
}

export default Answer;
