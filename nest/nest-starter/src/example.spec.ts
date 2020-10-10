class FriendsList {
  friends = [];

  addFriend(name) {
    this.friends.push(name);
    this.announceFriendShit(name);
  }

  announceFriendShit(name) {
    // console.log(`${name} is now a friend!`);
  }

  removeFriend(name) {
    const idx = this.friends.indexOf(name);
    if (idx === -1) {
      throw new Error('Friend not found!');
    }
    this.friends.splice(idx, 1);
  }
}

// tests
describe('FriendsList', () => {
  let friendsList: FriendsList;

  beforeEach(() => {
    friendsList = new FriendsList();
  });

  it('initializes friends list', () => {
    expect(friendsList.friends.length).toEqual(0);
  });

  it('adds a friend to the list', () => {
    friendsList.addFriend('Mohammad');
    expect(friendsList.friends.length).toEqual(1);
  });

  it('announce a friendship', () => {
    // create a mock fn
    friendsList.announceFriendShit = jest.fn();
    expect(friendsList.announceFriendShit).not.toHaveBeenCalled();
    friendsList.addFriend('Mohammad');
    // expect(friendsList.announceFriendShit).toHaveBeenCalled();
    expect(friendsList.announceFriendShit).toHaveBeenCalledWith('Mohammad');
  });

  describe('removeFriend', () => {
    it('removes a friend from the list', () => {
      friendsList.addFriend('Mohammad');
      expect(friendsList.friends[0]).toEqual('Mohammad');
      friendsList.removeFriend('Mohammad');
      expect(friendsList.friends[0]).toBeUndefined();
    });

    it('throws an error as friend does not exist', () => {
      expect(() => friendsList.removeFriend('Mohammad')).toThrow(Error('Friend not found!'));
    });
  });
});

describe('my test', () => {
  it('returns true', () => {
    expect(true).toEqual(true);
  });
});
