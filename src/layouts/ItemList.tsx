import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import List from '@mui/material/List';
const ItemList: React.FC = () => {
    return <List>
        {['Managers', 'Statisctics'].map((text, index) => (
            <ListItem button key={index} onClick={() => console.log(index)}>

                <ListItemText primary={text} />
            </ListItem>
        ))}
    </List>;
};

export default ItemList;
