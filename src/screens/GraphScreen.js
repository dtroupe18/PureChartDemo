import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import PureChart from 'react-native-pure-chart';

const sampleData = [
    {
        seriesName: 'series1',
        data: [
            {x: '2018-02-01', y: 30},
            {x: '2018-02-02', y: 200},
            {x: '2018-02-03', y: 170},
            {x: '2018-02-04', y: 250},
            {x: '2018-02-05', y: 10}
        ],
        color: '#297AB1'
    },
    {
        seriesName: 'series2',
        data: [
            {x: '2018-02-01', y: 20},
            {x: '2018-02-02', y: 100},
            {x: '2018-02-03', y: 140},
            {x: '2018-02-04', y: 550},
            {x: '2018-02-05', y: 40}
        ],
        color: 'yellow'
    }
];

const GraphScreen = () => {
    return (
        <View>
            <Text style={styles.text}>Graph Title</Text>
            <PureChart
                data={sampleData}
                type='line'
                height={250}
                width={'100%'}
            />
        </View>

    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    text: {
        marginBottom: 10
    },
    graph: {
        // flex: 1,
        // alignItems: 'center',
        // justifyContent: 'center',
        height: 500,
    },
});

export default GraphScreen;

