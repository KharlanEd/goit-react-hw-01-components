import PropTypes from 'prop-types';
import css from 'components/Statistics/Statistics.module.css'
import { Item } from './Statistics.styled';
import {getRandomHexColor} from './Statistics.styled'



export const Statistics = ({title,stats}) => {
    return (<section className={css.statistics}>
        {title.length > 0 && (
            <h2 className={css.title}>{title}</h2>)}  
        <ul className={css.stat_list}>
            {stats.map(({ id, label, percentage }) => (
               <Item className={css.item} key={id} bgcColor={getRandomHexColor()}>
                <span className={css.label}>{label}</span>
                <span className={css.percentage}>{percentage}%</span>
                 </Item>
            )
            )}
        </ul>
                
            </section>)
}
Statistics.propTypes = {
    stats: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            label: PropTypes.string.isRequired,
            percentage: PropTypes.number.isRequired  
        })
    ).isRequired
}