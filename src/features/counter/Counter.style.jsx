import styled from 'styled-components';

export const Group = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const Button = styled.button`
    margin-left: 4px;
    margin-right: 8px;
    appearance: none;
    background: none;
    font-size: 32px;
    padding-left: 12px;
    padding-right: 12px;
    outline: none;
    border: 2px solid transparent;
    color: rgb(112, 76, 182);
    padding-bottom: 4px;
    cursor: pointer;
    background-color: rgba(112, 76, 182, 0.1);
    border-radius: 2px;
    transition: all 0.15s;
`;

export const Value = styled.span`
    font-size: 78px;
    padding-left: 16px;
    padding-right: 16px;
    margin-top: 2px;
    font-family: 'Courier New', Courier, monospace;
`;

export const Input = styled.input`
    font-size: 32px;
    padding: 2px;
    width: 64px;
    text-align: center;
    margin-right: 4px;
`;
