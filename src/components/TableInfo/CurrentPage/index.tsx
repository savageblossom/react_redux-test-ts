import React from 'react';

interface CurrentPageProps {
    currentPage: number;
}

const CurrentPage: React.FC<CurrentPageProps> = ({currentPage}) => (
    <div className="currentPage">
        Current Page: <span>{currentPage}</span>
    </div>
)
    
export default CurrentPage;