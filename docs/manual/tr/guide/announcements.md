# Duyurular

Platform Süper Yöneticileri ve yöneticiler duyuruları yönetebilir. Diğer roller listeyi okuyabilir ancak Yeni, Düzenle veya Sil işlemlerini görmez.

![Duyuru oluştur: 1 başlık, 2 içerik, 3 iptal, 4 kaydet](/images/announcements/announcement-create.png){.manual-shot}

| No. | Denetim | Ön koşul ve işlem | Sonuç, hata, izin veya risk |
|---|---|---|---|
| 1 | Başlık | Boş olmayan duyuru başlığı girin. | Zorunludur; boş giriş yerel doğrulama hatası gösterir. |
| 2 | İçerik | Boş olmayan duyuru içeriği girin. | Zorunludur; boş giriş yerel doğrulama hatası gösterir. |
| 3 | İptal | Kaydet’ten önce iletişim kutusunu kapatın. | Yerel girişi atar ve istek göndermez. |
| 4 | Kaydet | Yetkili yönetici geçerli alanları kaydeder. | Başarı yeni kaydı yayımlar; hata formu açık bırakır. |

![Duyuru düzenle: 1 başlık, 2 içerik, 3 iptal, 4 kaydet](/images/announcements/announcement-edit.png){.manual-shot}

| No. | Denetim | Ön koşul ve işlem | Sonuç, hata, izin veya risk |
|---|---|---|---|
| 1 | Başlık | Düzenle’yi açın ve mevcut başlığı değiştirin. | Kaydetmeden önce zorunludur. |
| 2 | İçerik | Mevcut metni değiştirin. | Kaydetmeden önce zorunludur. |
| 3 | İptal | Düzenleme iletişim kutusunu kapatın. | Yayımlanmış kaydı değiştirmez. |
| 4 | Kaydet | İzinli değişiklikleri kaydedin. | Başarı kaydı günceller; hata mevcut duyuruyu korur. |

![Duyuru işlemleri: 1 Yeni duyuru, 2 Düzenle, 3 Sil](/images/announcements/announcement-delete-action.png){.manual-shot}

| No. | Denetim | Ön koşul ve işlem | Sonuç, hata, izin veya risk |
|---|---|---|---|
| 1 | Yeni duyuru | Oluşturma iletişim kutusunu açmak için seçin. | Yalnızca yönetim rollerine görünür. |
| 2 | Düzenle | Bir kayıtta seçin. | Doldurulmuş düzenleme iletişim kutusunu açar. |
| 3 | Sil | Silmeden önce hedefi doğrulayın. | Ayrı onay olmadan doğrudan siler. Yüksek risklidir; hata kaydı listede bırakır. |
