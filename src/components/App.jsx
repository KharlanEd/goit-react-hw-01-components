import { GlobalStyle } from "./Globalstyle";
import { Profile } from "./Profile/Profile";
import { Statistics } from "./Statistics/Statistics";
import data from 'path/data.json'

import { FriendList } from "./Friends/FriendList";
import { TransactionHistory } from "./Transaction/TransactionHistory";
import transactions from '../path/transactions.json'

export const App = () => {
  return (
    <div
      style={{
        
        display: 'flex',
        flexWrap: 'wrap',
        gap: '10px',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101'
      }}
    >
      <Profile />
      <Statistics title="Upload stats"
        stats={data} />
      <FriendList  />
      <TransactionHistory items={transactions}/>

      <GlobalStyle/>
    </div>
    
  );
};
