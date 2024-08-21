
export const DUMMY_ITEMS :  Item[] = [
    {
      id: 'u1',
      name: 'Jasmine Washington',
      description: 'test',
      price : 1000,
      image: 'user-1.jpg',
      userId: '1'
    },
    {
      id: 'u2',
      name: 'Emily Thompson',
      description: 'test',
      price : 1000,
      image: 'user-2.jpg',
      userId: '2'
    },
    {
      id: 'u3',
      name: 'Marcus Johnson',
      description: 'test',
      price : 1000,
      image: 'user-3.jpg',
      userId: '2'
    },
    {
      id: 'u4',
      name: 'David Miller',
      description: 'test',
      price : 1000,
      image: 'user-4.jpg',
      userId: '2'
    },
    {
      id: 'u5',
      name: 'Priya Patel',
      description: 'test',
      price : 1000,
      image: 'user-5.jpg',
      userId: '1'
    }
  ];

export interface Item{
    'id' : string,
    'name':string,
    'description' : string,
    'price' : number,
    'image' : string,
    'userId': string
}  