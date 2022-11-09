import React from "react";
import styles from "/home/jer/testy/SolanaPay-CCC-main/SolanaPay-CCC-main/styles/Product.module.css";
import IPFSDownload from '/home/jer/testy/SolanaPay-CCC-main/SolanaPay-CCC-main/components/IpfsDownload';

export default function Product({ product }) {
  const { id, name, price, description, image_url } = product;

  return (
    <div className={styles.product_container}>
      <div >
        <img className={styles.product_image}src={image_url} alt={name} />
      </div>

      <div className={styles.product_details}>
        <div className={styles.product_text}>
          <div className={styles.product_title}>{name}</div>
          <div className={styles.product_description}>{description}</div>
        </div>

        <div className={styles.product_action}>
          <div className={styles.product_price}>{price} USDC</div>
          {/*I'm hardcoding these for now, we'll fetch the hash from the API later*/}



<IPFSDownload filename="cashcowsdocs.txt" hash="QmQW88xkiEnXqg93KfBUebpfz7enQupskUVfMeX8LFeY3K"/>



     </div>
      </div>
    </div>
  );
}
