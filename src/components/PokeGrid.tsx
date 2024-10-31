import { useContext } from 'react';
import PokeUser from '../types/PokeUserType';
import PokeItem from './PokeItem';
import Card from './shared/Card';
import PostsContext, { PostsContextType } from '../context/PostsContext';


const PokeGrid = (): JSX.Element => {

    const { postsData } = useContext(PostsContext) as PostsContextType;

    return (
        <div className='grid items-center justify-center'>
            {
                postsData.map(({ user, pokemon }: PokeUser, index: number) => (
                    <Card key={index}>
                        <PokeItem user={user} pokemon={pokemon} />
                    </Card>
                ))
            }
        </div>
    )
}

export default PokeGrid