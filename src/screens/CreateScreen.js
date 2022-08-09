import React, {useContext} from "react";
import {StyleSheet} from "react-native";
import {Context} from "../context/BlogContext";
import BlogPostForm from "../components/BlogPostForm";

const CrateScreen = ({navigation}) => {
    const {addBlogPost} = useContext(Context)

    return (
        <BlogPostForm onSubmit={(title, content) => {
            addBlogPost(title, content, () => {
                navigation.navigate('Index')
            })
        }}/>
    )
}

StyleSheet.create({});

export default CrateScreen;