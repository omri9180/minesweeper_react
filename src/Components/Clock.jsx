import React, { useEffect, useState } from 'react';

const Clock = ({ setTimeCount, timeCount, startClock }) => {
    useEffect(() => {
        let intervalId;
        if (startClock) {
            intervalId = setInterval(() => {
                setTimeCount(prevTime => {
                    let [hundreds, tens, ones] = prevTime;
                    ones++;
                    if (ones === 10) {
                        ones = 0;
                        tens++;
                    }
                    if (tens === 10) {
                        tens = 0;
                        hundreds++;
                    }
                    return [hundreds, tens, ones];
                });
            }, 1000);
        }

        return () => clearInterval(intervalId);
    }, [startClock, setTimeCount]);

    return <div>{timeCount[0] + '' + timeCount[1] + '' + timeCount[2]}</div>;
};

export default Clock;
