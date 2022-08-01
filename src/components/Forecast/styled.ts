import styled from 'styled-components';

export const ForecastContainer = styled.div`
  margin-top: 1rem;
  background-color: ${({ theme }) => theme.forecastPanelBgColor};
  box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.1);
  border-radius: 15px;
  padding: 1.5rem 2rem;
  overflow: hidden;
`;
export const SectionTitle = styled.h6`
  font-weight: 500;
  font-size: 1.125rem;
  color: ${({ theme }) => theme.panelTitleColor};
`;
export const ForecastItems = styled.div`
   display: flex;
`;
export const ForecastItemContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 1rem;
  h6 {
    font-weight: 600;
    font-size: 1.125rem;
    color: #4581c5;
    margin: 5px 40px;
  }
  svg {
    width: 4rem;
    height: 4rem;
    margin: 5px 40px;
  }
  div {
    font-size: 1.125rem;
    color: #4a6fa1;
    width: 5rem;
    text-align: center;
    margin: 5px 40px;
  }
`;
