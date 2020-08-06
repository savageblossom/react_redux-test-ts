import React from 'react';

interface EntriesCountProps {
    count: number;
}

const EntriesCount: React.FC<EntriesCountProps> = ({count}) => (
    <div className="entriesCount">
        Entries Count: {count}
    </div>
)

export default EntriesCount