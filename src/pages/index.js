// import Head from 'next/head'
// import Image from 'next/image'
// import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Profile from "@/pages/components/profile_props";
import MyComp from "@/pages/qcomps/firstcomp";
import Bio from "@/pages/qcomps/bios";
import TodoList from "@/pages/qcomps/todos";
import Holder from "@/pages/components/square";
import PackingList from "@/pages/qcomps/props_item";
import Gallery from "@/pages/qcomps/state";
import PersonData from "@/pages/components/stateObj";
import FeedbackForm from "@/pages/qcomps/thankYouCrash";
import Form from "@/pages/components/snapshot2";
import Counter from "@/pages/components/queueUpdates";
import RequestTracker from "@/pages/qcomps/shoppingCart";

export default function Home() {
  return (
    <div className={styles.main}>
        <RequestTracker />
    </div>
  )
}
