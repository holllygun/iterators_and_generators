export default class Team {
    constructor() {
        this.members = new Set();
    }

    add(member) {
        if(this.members.has(member)){
            throw new Error ('Этот персонаж уже добавлен в команду!');
        } else {
            this.members.add(member);
            return this.members;
        }
    }

    addAll(...member) {
        for (const m of member) {
            this.members.add(m);
        }
        return this.members;
    }

    toArray() {
        return [...this.members];
    }

    iter() {
        let nextIndex = 0;
        const members = [...this.members];

        return {
            next: function () {
                return nextIndex < members.length
                ? { value: members[nextIndex++], done: false }
                : { done: true};
            },
        };
    }

    *[Symbol.iterator]() {

        for (const member of this.members) {
            yield member;
        }
      };    
}