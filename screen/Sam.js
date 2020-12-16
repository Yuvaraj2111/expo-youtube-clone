const sampleUser = (user, photoUrl) => {
    return (
        <>
        <Text>{user}</Text>
        <Image source={photoUrl}></Image>
        </>
    )
}

export default sampleUser;