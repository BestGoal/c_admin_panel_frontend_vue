export default {
    addnewId: (state, Idintifys) => state.Idintify.push(Idintifys),
    alldata : (state , allIdintifys) => state.Idintify = allIdintifys,

    add: (state, dd) => {
        state.Idintify.subsId=dd.subsId;
        state.Idintify.ownerSub=dd.ownerSub;
        state.Idintify.Cid=dd.Cid;
        state.Idintify.phoneNum=dd.phoneNum;
    }
}
