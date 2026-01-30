import React, { useEffect, useState } from 'react';
import { Text, View, StyleSheet } from 'react-native';

type Props = {
  seconds: number;
};

const SimpleTimer = ({ seconds }: Props) => {
  const [timeLeft, setTimeLeft] = useState(seconds);

  useEffect(() => {
    if (timeLeft <= 0) return;

    const interval = setInterval(() => {
      setTimeLeft(prev => prev - 1);
    }, 1000);

    return () => clearInterval(interval);
  }, [timeLeft]);

  const formatTime = () => {
    const h = Math.floor(timeLeft / 3600);
    const m = Math.floor((timeLeft % 3600) / 60);
    const s = timeLeft % 60;

    return `${h}h ${m}m ${s}s remaining`;
  };

  return (
    <View>
      <Text style={styles.timer}>{formatTime()}</Text>
    </View>
  );
};

export default SimpleTimer;


const styles = StyleSheet.create({
  timer: {
    color: '#EAF1FF',
    fontSize: 12,
  },
})