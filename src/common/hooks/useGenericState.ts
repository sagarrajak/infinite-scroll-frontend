import React, { useState } from 'react'

export default function useGenericState<T>(state: T): [T, (newState: Partial<T>) => void] {
    const [localState, setState] = useState<T>(state);

    const updateState = (newState: Partial<T>) => {
        setState({
            ...localState,
            ...newState
        });
    };

    return [localState, updateState];
}
