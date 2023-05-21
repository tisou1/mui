import React from 'react';
interface PagitationProps {
    totalCount: number;
    currentPage?: number;
    itemsPerPage?: number;
    onChange?: (selectPage: number, prevPage: number, itemsPerPage: number) => void;
}
declare const Pagitation: React.FC<PagitationProps>;
export default Pagitation;
