import * as React from 'react';
import LinkCard,{LinkCardProps} from '../molecules/linkcard';

interface LinkCardListProps{
    list: LinkCardProps[];
}
LinkCard.propTypes
const LinkCardList: React.FunctionComponent<LinkCardListProps> = (props)=>{
    return (
        <div>
            {props.list.map((item,index)=>{
                return (
                    <LinkCard key={index} {...item}/>
                )
            })}
        </div>
    )
}

export default LinkCardList;