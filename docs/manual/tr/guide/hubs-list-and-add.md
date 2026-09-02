# Hub’lar ve kayıt

![Hub liste işlemleri: 1 durum, 2 mod, 3 şirket, 4 SN, 5 Hub ekle, 6 cihazlar, 7 kur/devre dışı bırak, 8 ayrıntılar, 9 ata, 10 sil](/images/hubs/hub-list-actions.png){.manual-shot}

| No. | Denetim | Kullanım ve sonuç |
|---|---|---|
| 1 | Durum filtresi | Listeyi Hub durumuna göre sınırlar. |
| 2 | Mod filtresi | Listeyi mevcut kurulum moduna göre sınırlar. |
| 3 | Şirket filtresi | Listeyi bir şirketle sınırlar. |
| 4 | SN araması | Hub seri numarasına göre filtreler. |
| 5 | Hub ekle | Kayıt sihirbazını açar. |
| 6 | Cihaz sayısı | Hub’ın alt cihazlarını açar. |
| 7 | Kur veya devre dışı bırak | Seçili Hub modunu değiştirir. Önce Hub’ı ve amaçlanan modu doğrulayın; hata varsa modun değiştiğini varsaymayın. |
| 8 | Ayrıntılar | Seçili Hub ayrıntısını açar. |
| 9 | Ata | Değiştirmeden atama penceresini açar. |
| 10 | Sil | Silme onayını açar. |

![Hub ata: 1 şirket, 2 kişi, 3 iptal, 4 kaydet](/images/hubs/hub-assign-modal.png){.manual-shot}

| No. | Denetim | Kullanım ve sonuç |
|---|---|---|
| 1 | Şirket | Hedef şirketi seçin. |
| 2 | Kişiye ata | Şirketi seçtikten sonra uygun kişiyi arayın/seçin. |
| 3 | İptal | Atamayı değiştirmeden kapatır. |
| 4 | Kaydet | Yetkiliyse atamayı kaydeder; hata mevcut atamayı korur. |

![Hub silme onayı: 1 sonuç, 2 iptal, 3 onayla](/images/hubs/hub-delete-confirm.png){.manual-shot}

| No. | Denetim | Kullanım ve risk |
|---|---|---|
| 1 | Bağ kaldırma sonucu | Hub’ı doğrulayın: silme kişi/şirket bağlarını kaldırır, fiziksel SN kaydı kalır. |
| 2 | İptal | Silmeden kapatır. |
| 3 | Onayla | Yetkili silme, Hub’ı yeniden bağlanana kadar PC’de kullanılamaz yapar. |

![Hub ekle adım 1: 1 Güç ve bağlantı, 2 Hazır - devam et, 3 Kapat](/images/hubs/hub-add-step-1.png){.manual-shot}

| No. | Adım 1 denetimi | Ön koşul, işlem, sonuç, hata veya izin |
|---|---|---|
| 1 | Güç ve bağlantı | Devam etmeden Hub’a güç verin ve gerekli Ethernet veya LTE bağlantısını kurun. |
| 2 | Hazır - devam et | SN girişine geçer; Hub eklemez veya bağlamaz. |
| 3 | Kapat | Hub eklemeden sihirbazdan çıkar. |

![Hub ekle adım 2: 1 Hub SN, 2 Geri, 3 İleri, 4 Kapat](/images/hubs/hub-add-step-2.png){.manual-shot}

| No. | Adım 2 denetimi | Ön koşul, işlem, sonuç, hata veya izin |
|---|---|---|
| 1 | Hub SN | Cihaz etiketindeki SN’yi (seri numarası) girin. Yalnızca harf ve sayı kabul edilir; boş veya geçersiz SN ilerlemez. |
| 2 | Geri | Hub bağlamadan Güç ve bağlantı adımına döner ve sihirbazı korur. |
| 3 | İleri | SN’yi doğrular, şirket sahipliği seçimini açar. |
| 4 | Kapat | Bağ oluşturmadan sihirbazı iptal eder. |

![Hub ekle adım 3: 1 ara, 2 Şirket yok, 3 şirket seçeneği, 4 Daha fazla yükle, 5 Hub eklemeyi onayla](/images/hubs/hub-add-step-3.png){.manual-shot}

| No. | Adım 3 denetimi | Ön koşul, işlem, sonuç, hata veya izin |
|---|---|---|
| 1 | Şirket arama | Doğrulanmış SN için seçilebilir şirketleri arayın. |
| 2 | Şirket yok | Seçimi temizler ve Hub eklemeyi onayla düğmesini gizler; bağ yapılamaz. |
| 3 | Şirket seçeneği | Amaçlanan şirketi seçin; devamdan önce sahipliği doğrulayın. |
| 4 | Daha fazla yükle | Sonraki şirket sayfasını yükler. Arama hatası olursa Yeniden dene sihirbazı korur ve Hub bağlamaz. |
| 5 | Hub eklemeyi onayla | Şirket seçilince kullanılabilir. Yüksek etkili bir bağlama işlemidir; başarı Hub’ı şirkete bağlar, hata sihirbazı düzeltme veya yeniden deneme için açık bırakır. |

**Silme riski.** Hub silme kişi ve şirket bağlarını kaldırır; yeniden bağlanana kadar PC’de görünmez. Fiziksel SN kaydı tutulur ve fiziksel olarak silinmez.
