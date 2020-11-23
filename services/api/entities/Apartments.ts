import { boundMethod } from 'autobind-decorator';

import { DocumentData } from 'api/Firebase/modules/Database/types';
import { CommentData, RoomRatingRequest } from 'redux/Booking/types';

import { Database, CollectionReference } from '../Firebase/modules/Database';
import { Apartment } from './model';

class Apartments {
  private readonly actions: Database;
  private readonly reference: CollectionReference;

  constructor(actions: Database) {
    this.actions = actions;
    this.reference = this.actions.ref().collection('apartments');
  }

  @boundMethod
  public async add(data: Apartment): Promise<void> {
    this.actions.post({ ref: this.reference, doc: String(data.id), data });
  }

  @boundMethod
  public async remove(id: Apartment['id']): Promise<void> {
    this.actions.removeDocument(this.reference.doc(String(id)));
  }

  @boundMethod
  public update(id: Apartment['id'], data: Partial<Apartment>): void {
    this.actions.update(this.reference.doc(String(id)), data);
  }

  @boundMethod
  public async load(id: Apartment['id']): Promise<Apartment> {
    return this.actions.getDocument(this.reference, String(id));
  }

  @boundMethod
  public async loadUserReviews(userEmail: string, roomId: number): Promise<unknown> {
    const document: DocumentData = await this.actions.getDocument(
      this.actions.ref().collection('reviews'),
      userEmail,
    );

    return document ? document.reviews.filter((review) => review.roomId === roomId)[0] : {};
  }

  @boundMethod
  public async setRoomReview({ commentData, roomId }: CommentData): Promise<Apartment> {
    return this.reference
      .doc(String(roomId))
      .get()
      .then((doc) => {
        if (doc.exists) {
          const document = doc.data();
          const { userEmail } = commentData;

          const newDocumentReviews = document.reviews.filter(
            (review) => review.userEmail !== userEmail,
          );
          newDocumentReviews.push(commentData);
          document.reviews = newDocumentReviews;

          this.update(roomId, document);

          return this.actions.getDocument(this.reference, String(roomId));
        }

        return null;
      });
  }

  @boundMethod
  public setRoomRating(data: RoomRatingRequest): void {
    const { rating, roomId, userEmail } = data;

    this.actions
      .ref()
      .collection('reviews')
      .where('user', '==', userEmail)
      .get()
      .then((docs) => {
        if (!docs.empty) {
          docs.forEach((doc) => {
            const docData = doc.data();

            const newReviewsArray =
              docData.reviews.filter((review) => review.roomId !== roomId) || null;

            newReviewsArray.push({ roomId, userRating: rating });

            docData.reviews = newReviewsArray;

            this.actions.ref().collection('reviews').doc(userEmail).set(docData);
          });
        } else {
          this.actions
            .ref()
            .collection('reviews')
            .doc(userEmail)
            .set({ user: userEmail, reviews: [{ roomId, userRating: rating }] });
        }
      });
  }
}

export { Apartments };
