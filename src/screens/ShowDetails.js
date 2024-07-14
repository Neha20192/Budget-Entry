import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {bugdetForm} from '../store/budgetSlice';
import {useSelector} from 'react-redux';

const ShowDetails = () => {
  const items = useSelector(bugdetForm);
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Bugdet Details </Text>
      <View style={styles.table}>
        <View style={styles.headerRow}>
          <Text style={styles.headerCell}>Name</Text>
          <Text style={styles.headerCell}>Planned Amount</Text>
          <Text style={styles.headerCell}>Actual Amount</Text>
        </View>
        {items.map((item, index) => (
          <View style={styles.row}>
            <Text style={styles.cell}>{item.name}</Text>
            <Text style={styles.cell}>{item.plannedAmount}</Text>
            <Text style={styles.cell}>{item.actualAmount}</Text>
          </View>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  heading: {
    color: '#9F4221',
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 30,
    marginTop: 50,
  },
  container: {
    width: '100%',
    height: '100%',
    backgroundColor: '#E4C59E',
  },
  table: {
    marginTop: '10%',
    borderWidth: 2,
    borderColor: '#000',
    borderRadius: 5,
    marginBottom: 10,
    marginHorizontal: 10,
    backgroundColor: '#AF8260',
  },
  headerRow: {
    flexDirection: 'row',
    backgroundColor: '#AF8260',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: 'black',
  },
  headerCell: {
    flex: 1,
    fontWeight: '500',
    textAlign: 'center',
  },
  row: {
    flexDirection: 'row',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  cell: {
    flex: 1,
    textAlign: 'center',
  },
});

export default ShowDetails;
